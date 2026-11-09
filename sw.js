const CACHE_NAME = 'badeps-offline-v2';

const APP_ASSETS = [
    './',
    './index.html',
    './BadEPSNumProf.html',
    './data.js',
    './manifest.json',
    './badeps.png',
    './logobadeps.png',
    './terrainbad.svg',
    './schema-n1.png',
    './service-n2.png',
    './service-n3.png',
    './service-n4.png',
    './placement-n1.png',
    './placement-n2.png',
    './placement-n3.png',
    './placement-n4.png',
    './amorti.svg',
    './amorti1.svg',
    './amorti2.svg',
    './amorti3.svg',
    './amorti4.svg',
    './smatch.svg',
    './smatch-n1.png',
    './smatch-n2.png',
    './degage1.svg',
    './degage2.svg',
    './degage3.svg',
    './degoff.svg',
    './service.svg',
    './servstrat.svg',
    './stratult.svg',
    './combodec.svg',
    './zarr.svg',
    './zav.svg',
    './zlibre.svg',
    './medserv.png',
    './medplacvol.png',
    './medamorti.png',
    './medsmatch.png',
    './meddegage.png',
    './medstratserv.png',
    './medstratjeu.png'
];

const VIDEO_ASSETS = [
    './reglesbad.mp4',
    './servir-court.mp4',
    './servir-long.mp4',
    './tutodegage.mp4'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // 1. Mise en cache prioritaire de tous les schémas d'exercices et fichiers de l'application
            await Promise.allSettled(
                APP_ASSETS.map(async (url) => {
                    try {
                        const req = new Request(url, { cache: 'reload' });
                        const res = await fetch(req);
                        if (res && res.ok) {
                            await cache.put(url, res);
                        }
                    } catch (e) {
                        try { await cache.add(url); } catch (err) {}
                    }
                })
            );
            // 2. Mise en cache des vidéos en arrière-plan sans bloquer l'activation du Service Worker
            caches.open('badeps-videos-v1').then(async (videoCache) => {
                for (const videoUrl of VIDEO_ASSETS) {
                    try {
                        const deja = await videoCache.match(videoUrl, { ignoreSearch: true });
                        if (!deja) {
                            await videoCache.add(videoUrl);
                        }
                    } catch (e) {}
                }
            });
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME && key !== 'badeps-videos-v1') {
                        return caches.delete(key);
                    }
                })
            )
        ).then(() => self.clients.claim())
    );
});

async function handleVideoRangeRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const videoCache = await caches.open('badeps-videos-v1');
    let cachedResponse = await videoCache.match(request, { ignoreSearch: true }) ||
                         await cache.match(request, { ignoreSearch: true });

    if (!cachedResponse) {
        try {
            const netResponse = await fetch(request);
            if (netResponse && netResponse.status === 200) {
                videoCache.put(request.url, netResponse.clone());
            }
            return netResponse;
        } catch (err) {
            return new Response('', { status: 404, statusText: 'Offline video not found' });
        }
    }

    const rangeHeader = request.headers.get('range');
    if (!rangeHeader) {
        return cachedResponse;
    }

    const arrayBuffer = await cachedResponse.arrayBuffer();
    const bytes = /^bytes\=(\d+)\-(\d+)?$/i.exec(rangeHeader);
    if (!bytes) {
        return cachedResponse;
    }

    const start = Number(bytes[1]);
    const end = bytes[2] ? Math.min(Number(bytes[2]), arrayBuffer.byteLength - 1) : arrayBuffer.byteLength - 1;
    const slicedBuffer = arrayBuffer.slice(start, end + 1);

    return new Response(slicedBuffer, {
        status: 206,
        statusText: 'Partial Content',
        headers: [
            ['Content-Type', 'video/mp4'],
            ['Content-Range', `bytes ${start}-${end}/${arrayBuffer.byteLength}`],
            ['Content-Length', String(slicedBuffer.byteLength)],
            ['Accept-Ranges', 'bytes']
        ]
    });
}

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.pathname.endsWith('.mp4')) {
        event.respondWith(handleVideoRangeRequest(event.request));
        return;
    }

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cached) => {
            if (cached) {
                return cached;
            }
            return fetch(event.request).then((response) => {
                if (response && response.status === 200 && event.request.method === 'GET') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => cached);
        })
    );
});


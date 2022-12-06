'use strict';

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        devtools: true,
        // dumpio : true,
        defaultViewport: {
            width: 1280,
            height: 1024,
        },
    });
    const page = await browser.newPage();

    function inject(page) {
        page.evaluate(() => {
            console.log('[DOMContentloaded] inject');
            const toBlob = HTMLCanvasElement.prototype.toBlob;
            const toDataURL = HTMLCanvasElement.prototype.toDataURL;
            const getImageData = CanvasRenderingContext2D.prototype.getImageData;

            var noisify = function (canvas, context) {
                if (context) {
                    const shift = {
                        'r': Math.floor(Math.random() * 10) - 5,
                        'g': Math.floor(Math.random() * 10) - 5,
                        'b': Math.floor(Math.random() * 10) - 5,
                        'a': Math.floor(Math.random() * 10) - 5
                    };
                    //
                    const width = canvas.width;
                    const height = canvas.height;
                    if (width && height) {
                        const imageData = getImageData.apply(context, [0, 0, width, height]);
                        for (let i = 0; i < height; i++) {
                            for (let j = 0; j < width; j++) {
                                const n = ((i * (width * 4)) + (j * 4));
                                imageData.data[n + 0] = imageData.data[n + 0] + shift.r;
                                imageData.data[n + 1] = imageData.data[n + 1] + shift.g;
                                imageData.data[n + 2] = imageData.data[n + 2] + shift.b;
                                imageData.data[n + 3] = imageData.data[n + 3] + shift.a;
                            }
                        }
                        context.putImageData(imageData, 0, 0);
                    }
                }
            };

            Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
                "value": function () {
                    if (!this.id) {
                        console.log("toBlob SIZE (", this.width, ',', this.height, ')');
                        noisify(this, this.getContext("2d"));
                    }
                    return toBlob.apply(this, arguments);
                }
            });

            Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
                "value": function () {
                    if (!this.id) {
                        console.log("toDataURL SIZE (", this.width, ',', this.height, ')');
                        noisify(this, this.getContext("2d"));
                    }
                    return toDataURL.apply(this, arguments);
                }
            });

            Object.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
                "value": function () {
                    if (!this.id) {
                        console.log("getImageData SIZE (", this.width, ',', this.height, ')');
                        noisify(this.canvas, this);
                    }
                    return getImageData.apply(this, arguments);
                }
            });
        });
    }

    // page.on('domcontentloaded', () => {
    //     //inject(page);
    //     page.evaluate(() => {
    //         console.log('[DOMCcontentloaded]');
    //     });
    // })

    // page.on('load', () => {
    //     page.evaluate(() => {
    //         console.log('[LOAD]');
    //     });
    // })

    await page.evaluateOnNewDocument(() => {
        console.log('[DOMContentloaded] inject');
        const toBlob = HTMLCanvasElement.prototype.toBlob;
        const toDataURL = HTMLCanvasElement.prototype.toDataURL;
        const getImageData = CanvasRenderingContext2D.prototype.getImageData;

        var noisify = function (canvas, context) {
            if (context) {
                const shift = {
                    'r': Math.floor(Math.random() * 10) - 5,
                    'g': Math.floor(Math.random() * 10) - 5,
                    'b': Math.floor(Math.random() * 10) - 5,
                    'a': Math.floor(Math.random() * 10) - 5
                };
                //
                const width = canvas.width;
                const height = canvas.height;
                if (width && height) {
                    const imageData = getImageData.apply(context, [0, 0, width, height]);
                    for (let i = 0; i < height; i++) {
                        for (let j = 0; j < width; j++) {
                            const n = ((i * (width * 4)) + (j * 4));
                            imageData.data[n + 0] = imageData.data[n + 0] + shift.r;
                            imageData.data[n + 1] = imageData.data[n + 1] + shift.g;
                            imageData.data[n + 2] = imageData.data[n + 2] + shift.b;
                            imageData.data[n + 3] = imageData.data[n + 3] + shift.a;
                        }
                    }
                    context.putImageData(imageData, 0, 0);
                }
            }
        };

        Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
            "value": function () {
                if (!this.id) {
                    console.log("toBlob SIZE (", this.width, ',', this.height, ')');
                    noisify(this, this.getContext("2d"));
                }
                return toBlob.apply(this, arguments);
            }
        });

        Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
            "value": function () {
                if (!this.id) {
                    console.log("toDataURL SIZE (", this.width, ',', this.height, ')');
                    noisify(this, this.getContext("2d"));
                }
                return toDataURL.apply(this, arguments);
            }
        });

        Object.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
            "value": function () {
                if (!this.id) {
                    console.log("getImageData SIZE (", this.width, ',', this.height, ')');
                    noisify(this.canvas, this);
                }
                return getImageData.apply(this, arguments);
            }
        });
    });
//https://toutiao.io/posts/9so60lk/preview
    await page.goto('https://iphey.com/#hardware-text', {
        waitUntil: 'domcontentloaded'
    });
    // await page.goto('https://pixelscan.net/frequency', {
    //     waitUntil: 'domcontentloaded'
    // });
    //await page.evaluate(() => console.log('NOTHING TO DO'));
    //console.log('dom even fired');
    //await browser.close();
})();
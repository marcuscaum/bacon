requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "smoothscroll": ["jquery"],
        "cycle": ["jquery"],
        "marquee": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
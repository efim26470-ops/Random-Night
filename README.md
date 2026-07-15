# Random Night PWA

Random Night is a bilingual (English/Russian), mobile-first evening-plan generator with more than 60 event scenarios across free, modest, elevated, and premium budgets. It works offline, installs as a PWA, and uses only static files, so it is ready for GitHub Pages.

## Deploy on GitHub Pages

1. Create an empty GitHub repository.
2. Upload **the contents of this folder** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

GitHub Pages will provide an HTTPS URL. Open that URL in Safari on iPhone, tap **Share**, then **Add to Home Screen**.

## Local preview

Run a static server from this directory, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes

- All paths are relative, including the service worker scope, so project Pages URLs such as `username.github.io/random-night/` work correctly.
- Preferences are stored only in the browser with `localStorage`.
- There is no backend, account, analytics, or third-party API.

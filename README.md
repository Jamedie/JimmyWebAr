# Web AR

procedure creation Projets :

pour Ne pas avoir l'erreur suivante :

Access to fetch at 'https://firebasestorage.googleapis.com/v0/b/augmented-shop-44400.appspot.com/o/Alpine2021.glb?alt=media' from origin 'https://jimmy-webar.web.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

il faut suivre la doc de firebase :
https://firebase.google.com/docs/storage/web/download-files

1. Download the Google Cloud CLI installer.
   Alternatively, open a PowerShell terminal and run the following PowerShell commands:
   (New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
   & $env:Temp\GoogleCloudSDKInstaller.exe
2. If you don't want any domain-based restrictions (the most common scenario), copy this JSON to a file named cors.json:
   [
   {
   "origin": ["*"],
   "method": ["GET"],
   "maxAgeSeconds": 3600
   }
   ]
3. Run gsutil cors set cors.json gs://<your-cloud-storage-bucket> to deploy these restrictions.

Il faut importer le module suivant pour Init l’ar

<script
type="module"
src="[https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js](https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js)"
></script>

Ajouter du Code Javascript dans un HTMl il suffit de mettre la balise <script type="text/javascript">

<script type="text/javascript">
// Check whether this is an Android device.
const isAndroid = /android/i.test(navigator.userAgent);
// This fallback URL is used if the Google app is not installed and up to date.
const fallbackUrl = 'https://arvr.google.com/scene-viewer?file=https%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2FTiger%2Fmodel.glb&link=https%3A%2F%2Fgoogle.com&title=Tiger';

// This intent URL triggers Scene Viewer on Android and falls back to
// fallbackUrl if the Google app is not installed and up to date.
const sceneViewerUrl = 'intent://arvr.google.com/scene-viewer/1.0?file=https://storage.googleapis.com/ar-answers-in-search-models/static/Tiger/model.glb&title=Tiger#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=' +
    fallbackUrl + ';end;';

// Create a link.
var a = document.createElement('a');
a.appendChild(document.createTextNode('Tiger'));
// Set the href to the intent URL on Android and the fallback URL
// everywhere else.
a.href = isAndroid ? sceneViewerUrl : fallbackUrl;
// Add the link to the page.
document.body.appendChild(a);
        </script>

AR Button

<!-- Import the component -->
<script
  type="module"
  src="https://unpkg.com/@wonder-partners/ar-button"
  title="Chevrolet Corvette ZR"
></script>

<!-- Default stylesheet (optional) -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@wonder-partners/ar-button/styles.css"
/>

<!-- Use it like any other HTML element -->

<ar-button src="https://firebasestorage.googleapis.com/v0/b/jimmy-webar.appspot.com/o/ChevroletCorvetteZR1.glb?alt=media"
ios-src="https://firebasestorage.googleapis.com/v0/b/jimmy-webar.appspot.com/o/ChevroletCorvetteZR1.usdz?alt=media">

View in your space
</ar-button>

Iframe

<script type="text/javascript">
  Intent sceneViewerIntent = new Intent(Intent.ACTION_VIEW); Uri intentUri =    
  Uri.parse("https://arvr.google.com/scene-viewer/1.0").buildUpon()    
  .appendQueryParameter("file",
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf")
      .appendQueryParameter("mode", "ar_only")     .build();
  sceneViewerIntent.setData(intentUri);
  sceneViewerIntent.setPackage("com.google.ar.core");
  startActivity(sceneViewerIntent);
</script>

html
<a href="intent://arvr.google.com/scene-viewer/1.0?file=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf&mode=ar_only#Intent&title=Tiger;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">Avocado</a>;

Connaitre la plateforme actuel (ios ou android)

<script type="text/javascript">
          window.onload = function () {
            var iOS =
              /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            var android = /android/i.test(navigator.userAgent);

            if (iOS) {
              document.getElementById("ar-ios").hidden = false;
              document.getElementById("ar-android").hidden = true;
            }
            if (android) {
              document.getElementById("ar-ios").hidden = true;
              document.getElementById("ar-android").hidden = false;
            }
          };
        </script>

Mind Ar
il faut inttegré :

<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image-aframe.prod.js"></script>

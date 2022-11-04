# JimmyWebAr

Projet test pour la webA

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

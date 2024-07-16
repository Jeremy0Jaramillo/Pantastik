import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  projectId: "pantastik-d4954",
  appId: "1:259183648047:web:093228ba267630706595da",
  databaseURL: "https://pantastik-d4954-default-rtdb.firebaseio.com",
  storageBucket: "pantastik-d4954.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyCFtrlnduSLU7U48YpLpfydfTNvHX8KXac",
  authDomain: "pantastik-d4954.firebaseapp.com",
  messagingSenderId: "259183648047"
};


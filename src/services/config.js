import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbVVwjwwLZ0v2jmq46sJB4JL0BeVndtBI",
    authDomain: "conpalta-fc760.firebaseapp.com",
    projectId: "conpalta-fc760",
    storageBucket: "conpalta-fc760.firebasestorage.app",
    messagingSenderId: "957967121849",
    appId: "1:957967121849:web:4ede3521ac0c49be378a68"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const misProductos = [
    {
        nombre: "Palta verde",
        precio: 3000,
        img: "/img/palta.jpeg",
        idCat: "palta",
        descripcion: "Esta es una palta verde, que le falta maduración!(Consejo en el sol madura mas rapido☺)",
        stock: 50
    },
    {
        nombre: "Guacamole Picante",
        precio: 2500,
        img: "/img/guacpic.jpeg",
        idCat: "guacamole",
        descripcion: "Este es un guacamole preparado especialmente para aquellos a los que les gusta el picante!",
        stock: 52
    },
    {
        nombre: "Guacamole",
        precio: 950,
        img: "/img/guacsimp.jpeg",
        idCat: "guacamole",
        descripcion: "Este es un guacamole para a los que nos gusta el sabor riquisimo sin picantes innecesarios!",
        stock: 55
    },
    {
        nombre: "Palta Madura",
        precio: 3500,
        img: "/img/palte.jpeg",
        idCat: "palta",
        descripcion: "Esta es una palta que ya esta lista para su consumo!",
        stock: 154
    }
];


const subirProductos = async () => {
    const batch = writeBatch(db);
    const productosRef = collection(db, "productos");

    misProductos.forEach((producto) => {
        const nuevoDoc = doc(productosRef);
        batch.set(nuevoDoc, producto);
    });
    try {
        await batch.commit();
        console.log("Productos subidos correctamente");
    } catch (error) {
        console.error("!Error subiendo productos¡", error);
    }
};/*
subirProductos()*/
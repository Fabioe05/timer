# 🚀 Cohete Timer - Cuenta Regresiva

Un proyecto web interactivo que funciona como un temporizador personalizable y culmina con una divertida animación de despegue.

## 📝 Descripción

Este proyecto es un cronómetro dinámico que le permite al usuario establecer un tiempo de cuenta regresiva específico, con un rango permitido de *1 a 60 segundos*. A medida que transcurre el tiempo, el marcador se actualiza en pantalla en tiempo real. 

El objetivo principal del temporizador es ofrecer una experiencia visual e interactiva: una vez que el contador llega exactamente a 00, se detiene automáticamente y revela en pantalla la *animación de un cohete despegando*. 

## ✨ Características Principales

* *Temporizador Personalizable:* El usuario tiene el control de decidir cuántos segundos quiere contar (límite de 60s).
* *Validación de Entradas:* El sistema valida que el número ingresado esté dentro de los parámetros correctos antes de iniciar.
* *Formato de Dos Dígitos:* Uso del método padStart para asegurar que el tiempo siempre se vea uniforme (ej. 09, 05, 00).
* *Feedback Visual:* Animación en formato GIF que se activa dinámicamente mediante la manipulación del DOM al finalizar la cuenta.
* *Controles Sencillos:* Botones dedicados para iniciar la cuenta regresiva y para reiniciar el contador a su estado original en cualquier momento.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando el ecosistema web estándar (Vanilla), sin depender de librerías o frameworks externos:

* *HTML5:* Para la estructura semántica de la aplicación y la integración de elementos multimedia.
* *CSS3:* Para la estilización de la interfaz, otorgándole un diseño limpio y moderno.
* *JavaScript:* Para toda la lógica interactiva, el control del tiempo mediante setInterval y clearInterval, y la manipulación del árbol DOM.

# <u>Comandos github</u>

Les explico brevemente por ahora los comandos que deberian usar:

Primero clonen el repositorio con git clone [url de este repo]([GitHub - Red-movement/firstRed](https://github.com/Red-movement/firstRed.git)) como siempre.

Una vez clonado les va a aparecer como primera instancia en la rama Main, esta es justamente la que no deben tocar

para crear una rama nueva deben hacer lo siguiente:

Ejecuten el comando `git pull` para poder actualizar todo el repo de forma local.

Luego debemos crear una nueva rama con el nombre que querramos para poder trabajar, para esto lo que debemos hacer es lo siguiente: usando el comando `git checkout develop` lo que vamos a hacer es cambiarnos a la rama develop la

cual va a ser la rama que mas este actualizada, realizamos un `git pull` nuevamente para poder actualizarla de

acuerdo al repositorio remoto.

Ahora es cuando comienza la magia, para poder crear nuestra rama en base a la rama develop (**Recalco: esta es la***

**rama que va a tener mas cambio, Main solo recibira grandes cambios una ves este todo probado**) usaremos el comando

`git checkout -b [nombre que decidan para su rama]`. Una vez creada, podran trabajar en ella sin problemas e ir

pusheando codigo todas las veces que deseen sin miedo a afectar otras ramas

**<u>Dato de vital importancia para la trama:</u>** Lo ideal a la hora de nombrar su rama es que sea con el nombre de la

funcionalidad que esten trabajando, ejemplo, voy a trabajar en el boton de agregado de usuarios por lo tanto mi

rama la creare usando `git checkout -b addUserButton`. Sino en todo caso pueden llamar a las ramas con su nombre

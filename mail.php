<?php

		// Dirección de mail a la que se envía el mensaje
		$sendto  = 'yacoang@gmail.com'; 
		// Asunto del mensaje
		$subject = "Formulario de contacto de mi portafolio"; 
	
		// Contenido del mensaje
		$corps="Nombre: ".$_REQUEST['nombre']."\n".
		"Email: ".$_REQUEST['email']."\n".
		"Mensaje: ".$_REQUEST['mensaje']."\n"."\n".
	
		// Datos de quien envía el mensaje, para poder responder al mismo mensaje recibido
		$From = "De: ".$_REQUEST['nombre']."\n";
		$From .= "Replica a: ".$_REQUEST['nombre']."\n";

		// Comando para enviar el mail 
		@mail($sendto,$subject,$corps,$From);
?>

<a href="index.html">Enviado correctamente, click aqui para volver al inicio</a>

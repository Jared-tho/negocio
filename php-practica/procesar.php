<?php
// Recibe los datos del formulario por POST y los muestra en pantalla.
$nombre  = isset($_POST['nombre'])  ? htmlspecialchars($_POST['nombre'])  : '';
$correo  = isset($_POST['correo'])  ? htmlspecialchars($_POST['correo'])  : '';
$servicio = isset($_POST['servicio']) ? htmlspecialchars($_POST['servicio']) : '';
$mensaje = isset($_POST['mensaje']) ? htmlspecialchars($_POST['mensaje']) : '';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Datos recibidos</title>
</head>
<body>
  <h1>Datos recibidos</h1>
  <?php
    echo "<p><strong>Nombre:</strong> " . $nombre . "</p>";
    echo "<p><strong>Correo:</strong> " . $correo . "</p>";
    echo "<p><strong>Tipo de servicio:</strong> " . $servicio . "</p>";
    echo "<p><strong>Mensaje:</strong> " . nl2br($mensaje) . "</p>";
  ?>
  <p><a href="index.html">Volver al formulario</a></p>
</body>
</html>
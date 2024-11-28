<?php
// Configuración de conexión a la base de datos
$host = "localhost";
$dbname = "demo";
$username = "postgres";
$password = "prola";

// Conectar a la base de datos
$conn = pg_connect("host=$host dbname=$dbname user=$username password=$password");

// Verificar la conexión
if (!$conn) {
    die("Error de conexión: " . pg_last_error());
}

// Verifica si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura de datos del formulario
    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $correo = isset($_POST['correo']) ? trim($_POST['correo']) : '';
    $contra = isset($_POST['contra']) ? trim($_POST['contra']) : '';

    // Verifica que todos los campos requeridos tengan valores
    if (empty($nombre) || empty($correo) || empty($contra)) {
        die("Por favor, completa todos los campos.");
    }

    // Verificar longitud de los datos
    if (strlen($nombre) > 50) {
        die("Error: El nombre es demasiado largo. Debe tener 50 caracteres o menos.");
    }
    if (strlen($correo) > 100) {
        die("Error: El correo es demasiado largo. Debe tener 100 caracteres o menos.");
    }
    if (strlen($contra) > 255) {
        die("Error: La contraseña es demasiado larga. Debe tener 255 caracteres o menos.");
    }

    // Aquí ya no estamos haciendo hash de la contraseña
    // Insertar los datos en la base de datos
    $sql = "INSERT INTO usuarios (nombre, correo, contra) VALUES ($1, $2, $3)";
    $result = pg_query_params($conn, $sql, array($nombre, $correo, $contra)); // Usar la contraseña sin hashear

    if ($result) {
        header("Location: http://localhost/panda%20market%20v2.9/");
        exit();
    } else {
        echo "Error: " . pg_last_error($conn);
    }
}

// Cerrar la conexión
pg_close($conn);
?>
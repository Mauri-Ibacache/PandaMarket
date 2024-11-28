<?php
$host = "localhost";
$dbname = "demo"; // Cambia al nombre de tu base de datos
$username = "postgres"; // Cambia al nombre de tu usuario
$password = "prola"; // Cambia al nombre de tu contraseña

// Verificar si se han enviado las credenciales
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputCorreo = $_POST['correo'] ?? '';
    $inputContra = $_POST['contra'] ?? '';

    try {
        // Crear una nueva conexión a la base de datos
        $conn = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Preparar la consulta SQL
        $stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo = :correo AND contra = :contra");
        $stmt->bindParam(':correo', $inputCorreo);
        $stmt->bindParam(':contra', $inputContra);
        $stmt->execute();

        // Verificar si se encontró un registro
        if ($stmt->rowCount() > 0) {
            echo "Inicio de sesión exitoso. Redirigiendo a baba.html...";
            header("Location: baba.html");
            exit();
        } else {
            echo "Credenciales incorrectas. Intenta de nuevo.";
        }
    } catch (PDOException $e) {
        // Manejo de excepciones si la conexión falla
        echo "Error de conexión: " . $e->getMessage();
    }
}
?>

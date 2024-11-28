CREATE TABLE IF NOT EXISTS usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    contra VARCHAR(50) NOT NULL
);

INSERT INTO usuarios (nombre, correo, contra) VALUES
('javier requena', 'jrequena@example.com', '12345'),
('benjamin stevenson', 'bstevenson@example.com', 'mechadaqueso'),
('mauricio ibacache', 'mibacache@example.com', 'calama4ever');

SELECT * FROM usuarios

ALTER TABLE usuarios
ALTER COLUMN correo TYPE VARCHAR(100),
ALTER COLUMN contra TYPE VARCHAR(255);

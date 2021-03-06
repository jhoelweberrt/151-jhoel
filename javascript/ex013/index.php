<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversão de Dolar Para Real</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>
            Conversão de Dólar para Real
        </h1>
        <form action="salvar.php" method="get" onsubmit="return convert()">
        <label for="real">Real:</label>
        <input type="number" name="n" id="n" min="0" max="10000000" value="0" step="0.01"><br>
        <input type="submit" value="Ver Valor">
        </form>
    </main>
    <section id="resultado">
        <h2>
            Valor do Dólar
        </h2>
        <p id="frase">Valor do Dólar...</p>
        <button onclick="esconder()">Fechar</button>
    </section>
    <script src="converter.js"></script>
</body>
</html>
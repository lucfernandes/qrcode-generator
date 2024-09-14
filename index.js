// Importando a biblioteca
const QRCode = require("qrcode");

// Dados para o QR Code
const data = "https://www.bible.com/pt/bible/1930/1PE.1.18-19.NVT";

// Opções para o QR Code
const options = {
	scale: 100, // Ajuste este valor para alterar o tamanho do QR Code
	type: "svg", // Definindo o tipo como 'svg'
};

// Criando e salvando o QR Code
QRCode.toFile("./qrcode.svg", data, options, function (err) {
	if (err) return console.log("Erro ao criar QR Code: " + err);
	console.log("QR Code salvo como qrcode.png");
});

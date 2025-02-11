const soap = require("soap");
const express = require("express");

const app = express();

// Definir la lógica del servidor
const Service = {
    SaludoService: {
        SaludoPort: {
            Saludar: function (args) {
                return {
                    saludo: `Hola, ${args.name}, tu edad es: ${args.age}, y tu correo es: ${args.email}`,
                };
            },
        },
    },
};

const wsdl = `
<definitions xmlns="http://schemas.xmlsoap.org/wsdl/" 
             xmlns:tns="http://example.com/saludo" 
             xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" 
             targetNamespace="http://example.com/saludo">
    <message name="SaludarRequest">
        <part name="name" type="xsd:string"/>
        <part name="age" type="xsd:string"/>
        <part name="email" type="xsd:string"/>
    </message>
    <message name="SaludarResponse">
        <part name="saludo" type="xsd:string"/>
    </message>
    <portType name="SaludoPortType">
        <operation name="Saludar">
            <input message="tns:SaludarRequest"/>
            <output message="tns:SaludarResponse"/>
        </operation>
    </portType>
    <binding name="SaludoBinding" type="tns:SaludoPortType">
        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
        <operation name="Saludar">
            <soap:operation soapAction="http://example.com/saludo/Saludar"/>
            <input>
                <soap:body use="literal"/>
            </input>
            <output>
                <soap:body use="literal"/>
            </output>
        </operation>
    </binding>
    <service name="SaludoService">
        <port name="SaludoPort" binding="tns:SaludoBinding">
            <soap:address location="http://localhost:4000/saludo"/>
        </port>
    </service>
</definitions>
`;

// Configurar el servidor
app.listen(4000, () => {
    soap.listen(app, "/saludo", Service, wsdl);
    console.log("Servicio SOAP ejecutándose en http://localhost:4000");
});
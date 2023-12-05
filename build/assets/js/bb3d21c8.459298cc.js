"use strict";(self.webpackChunkdocs_redes=self.webpackChunkdocs_redes||[]).push([[257],{4167:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var i=s(5893),r=s(1151);const o={},a=void 0,l={id:"Protocolos/HTTP",title:"HTTP",description:"1. Protocolo de Capa de Aplicaci\xf3n: HTTP opera en la capa de aplicaci\xf3n del modelo OSI (Open Systems Interconnection).",source:"@site/docs/Protocolos/HTTP.md",sourceDirName:"Protocolos",slug:"/Protocolos/HTTP",permalink:"/docs/Protocolos/HTTP",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Protocolos/HTTP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DNS",permalink:"/docs/Protocolos/DNS"},next:{title:"IPV6",permalink:"/docs/Protocolos/IPV6"}},c={},t=[{value:"HTTPS (Hypertext Transfer Protocol Secure):",id:"https-hypertext-transfer-protocol-secure",level:3},{value:"FUNCIONAMIENTO",id:"funcionamiento",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Protocolo de Capa de Aplicaci\xf3n:"})," HTTP opera en la capa de aplicaci\xf3n del modelo OSI (Open Systems Interconnection)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Basado en el Protocolo TCP:"})," HTTP utiliza el Protocolo de Control de Transmisi\xf3n (TCP) como su protocolo de transporte subyacente. TCP proporciona una comunicaci\xf3n confiable y orientada a la conexi\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Puertos Est\xe1ndar:"})," El puerto est\xe1ndar para las conexiones HTTP es el puerto 80. Cuando un cliente env\xeda una solicitud HTTP a un servidor, generalmente se conecta al puerto 80 a menos que se especifique lo contrario."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mensajes de Solicitud y Respuesta:"})," Las interacciones en HTTP se basan en mensajes de solicitud y respuesta. Una solicitud HTTP incluye un m\xe9todo (GET, POST, etc.), la URL del recurso solicitado y la versi\xf3n de HTTP. La respuesta incluye un c\xf3digo de estado (200 OK, 404 Not Found, etc.) y los datos solicitados."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"M\xe9todos HTTP Comunes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GET:"})," Solicita la recuperaci\xf3n de un recurso."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"POST:"})," Env\xeda datos al servidor para ser procesados (por ejemplo, formularios HTML)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PUT:"})," Actualiza un recurso existente."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DELETE:"})," Elimina un recurso."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"https-hypertext-transfer-protocol-secure",children:"HTTPS (Hypertext Transfer Protocol Secure):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SSL/TLS para Cifrado:"})," HTTPS utiliza SSL (Secure Sockets Layer) o su sucesor TLS (Transport Layer Security) para cifrar la comunicaci\xf3n entre el cliente y el servidor. Esto asegura que los datos no puedan ser interceptados f\xe1cilmente por terceros."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Puerto Est\xe1ndar:"})," El puerto est\xe1ndar para conexiones HTTPS es el puerto 443. Cuando un cliente se conecta a un servidor a trav\xe9s de HTTPS, generalmente lo hace en el puerto 443, a menos que se especifique de otra manera."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Certificados Digitales:"})," Para establecer una conexi\xf3n segura, el servidor presenta un certificado digital al cliente. Este certificado es emitido por una entidad de certificaci\xf3n y verifica la autenticidad del servidor."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cifrado Asim\xe9trico y Sim\xe9trico:"})," HTTPS utiliza cifrado asim\xe9trico para el intercambio de claves y cifrado sim\xe9trico para la transmisi\xf3n de datos una vez establecida la conexi\xf3n segura."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Indicadores de Seguridad en el Navegador:"}),' Los navegadores web indican la presencia de una conexi\xf3n segura mediante un candado en la barra de direcciones y, a menudo, el uso de "https://" en lugar de "http://".']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"explicaci\xf3n-de-las-conexiones-con-el-servidor-web",children:"EXPLICACI\xd3N DE LAS CONEXIONES CON EL SERVIDOR WEB"}),"\n",(0,i.jsx)(n.p,{children:"Para iniciar la conexi\xf3n usa three-way handshakes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"SYN"}),"\n",(0,i.jsx)(n.li,{children:"SYN-ACK"}),"\n",(0,i.jsx)(n.li,{children:"ACK"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Una vez establecida la conexi\xf3n se env\xedan los datos a trav\xe9s de esa conexi\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Se segmentan para ser transmitidos por la red."}),"\n",(0,i.jsx)(n.p,{children:"TCP implementa mecanismos de control de flujo y congesti\xf3n para garantizar que la red no se sature y que los datos se transmitan eficientemente."}),"\n",(0,i.jsx)(n.p,{children:"La conexi\xf3n termina con los paquetes de ambos, servidor y cliente:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"FIN"}),"\n",(0,i.jsx)(n.li,{children:"ACK"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Una vez terminada la conexi\xf3n entran en un per\xedodo de TIME_WAIT para asegurarse de que no queda ning\xfan paquete residual antes de cerrar completamente la conexi\xf3n."}),"\n",(0,i.jsx)(n.h1,{id:"importante",children:(0,i.jsx)(n.em,{children:"IMPORTANTE!!!!!!!!"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Multiplexaci\xf3n HTTP/2:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTTP/2 es un protocolo que permite la multiplexaci\xf3n, lo que significa que varias solicitudes y respuestas pueden compartir una \xfanica conexi\xf3n TCP. Esto mejora significativamente la eficiencia, ya que elimina la necesidad de abrir m\xfaltiples conexiones para manejar solicitudes concurrentes."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"https",children:"HTTPS"}),"\n",(0,i.jsx)(n.p,{children:"HTTPS (HyperText Transfer Protocol Secure)"}),"\n",(0,i.jsx)(n.p,{children:"Prop\xf3sito:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Auth, cifrado extremo a extremo (TLS, SSL)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"funcionamiento",children:"FUNCIONAMIENTO"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Handshake TLS o SSL:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Se realiza un handshake para establecer la conexi\xf3n segura"}),"\n",(0,i.jsx)(n.li,{children:"Negociaci\xf3n de par\xe1metros de cifrado y se autentican por medio de certificados digitales."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Certificados digitales:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["CA (Autoridad de certificaci\xf3n):","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Emisi\xf3n de certificados que autentican un sitio web"}),"\n",(0,i.jsx)(n.li,{children:"Navegadores confian en los CAs"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"TLS o SSL:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"TLS sucesor a SSL"}),"\n",(0,i.jsx)(n.li,{children:"Cifrado extremo a extremo"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Algoritmos criptogr\xe1ficos:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Tipos:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"AES"}),"\n",(0,i.jsx)(n.li,{children:"RSA"}),"\n",(0,i.jsx)(n.li,{children:"ECC"}),"\n",(0,i.jsx)(n.li,{children:"Para cifrar y asegurar la conexi\xf3n."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HSTS (HTTP Strict Transport Security):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Pol\xedtica de seguridad que ayuda a proteger a un sitio web de ataques SSL stripping."}),"\n",(0,i.jsx)(n.li,{children:"Exige que todas las interacciones futuras con un sitio web se realicen de forma segura."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Perfect Forward Secrecy (PFS):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"PFS garantiza que, incluso si las claves de cifrado a largo plazo se ven comprometidas, las sesiones anteriores permanezcan seguras."}),"\n",(0,i.jsx)(n.li,{children:"Utiliza claves de sesi\xf3n ef\xedmeras que no pueden ser derivadas de las claves maestras a largo plazo."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Multiplexaci\xf3n y Rendimiento:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTTP/2 permite la multiplexaci\xf3n de m\xfaltiples flujos en una sola conexi\xf3n, mejorando la eficiencia."}),"\n",(0,i.jsx)(n.li,{children:"QUIC, un protocolo de transporte desarrollado por Google, proporciona conexiones seguras y de baja latencia."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var i=s(7294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
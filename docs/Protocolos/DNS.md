1. Definitions
	1. Hostname or host name: Name that identifies a host, for example pc1 or pc1.dominio.com
	2. Domain: Name that identifies a space of administrative autonomy, control, etc. Inside you can have multiple hostnames and multiple subdomains.
		1. Example:
			1. domain
			2. domain.com
			3. subdomain.domain.com
	3. FQDN (Fully Qualified Domain Name):
		1. It is a fully named hostname or domain, specifying all levels in the hierarchy.
		2. Zone: It is an authority zone, it is a domain minus all the subdomains delegated to other DNS servers.

## EXTRA INFORMATION
1. Translate between names and IPs thanks to domain name servers (DNS)
2. Port 53
3. UDP for resolutions
4. TCP for zone transfers
	1. AXFR:
		1. AXFR (Authority Transfer Full) is a type of zone transfer in DNS that involves the complete transfer of DNS zone information from a master server to a slave server. In other words, the entire zone record set is copied from a primary DNS server to the secondary DNS server.
	2. IXFR:
		1. IXFR (Incremental Zone Transfer) is a zone transfer method that only transfers updates or changes made since the last zone transfer. Instead of sending the entire zone, only the changes made are transmitted, which significantly reduces bandwidth usage and speeds up the update process on secondary servers.
	3. ZXFR:
		1. ZXFR (Zone Transfer for Specific Zones) is a term sometimes used to refer to the transfer of a specific zone within a top-level domain. Although it is not a commonly used or standardized term, it could refer to a specific zone transfer within a larger domain.
5. The top domain is root or `"."`. The domains that follow like:
	1. .com
	2. .net
		1. These domains are TLDs (Top Level Domains).
6. The programs used on the client side are called *resolvers*
7. An FQDN is simply a fully qualified domain name, it specifies all levels, including at least a TLD and an SLD (Second Level Domain)

## HIERARCHY

1. Authority over a domain is delegated to an authoritative server, this server can delegate authority over a subdomain to another server.
2. Each domain has at least one authoritative server that reports on that domain and on servers in subdomains.
	1. **Delegation of Authority:**
		
	- Delegation of authority is a process in which authority over a domain is transferred to a designated authoritative server. This allows for efficient distribution of domain name management on the Internet. For example, the authoritative server for the domain ".com" can delegate authority over "example.com" to another server.
	2. **Authoritative Server for Domains and Subdomains:**
	- Each domain, including subdomains, has at least one associated authoritative server. This server has the authoritative information about the DNS records for that specific domain and, if necessary, can delegate authority over subdomains to other authoritative servers.
![[Pasted image 20231113230056.png]]

## TYPES OF SERVERS

1. Cache only: Not an authority for any zone. It does not have a database (DB). Stores queries.
2. Authoritative: They respond with data that is stored locally.
	1. Primary (Master):
		1. It has a database with all records, which are managed locally. There is only one primary server
	2. Secondary (Slave):
		1. Works with zone transfer, which means taking the zones from a primary and storing them locally. There can be multiple secondary servers.

*The root name servers respond for the root domain and respond with the TLD servers (Top level Domains)*


## TYPES OF RECORDS

1. A
2. AAAA
3. NS
4. CNAME
5. PTR
6. MX
7. TXT
8. SOA

## TYPES OF CONSULTATIONS

1. Iterative: The server responds with partial information since it generally does not know the complete response, it refers the client to another server with more information
2. Recursive: The server assumes the responsibility of providing the response, if it is unknown, it is responsible for consulting other servers until obtaining it to finally provide said response to the client.

## GLUE RECORDS

In iterative responses, the next name server to query is identified by domain name and not by IP, so another query may be required to resolve it.

For example, suppose that the authoritative server for `example.com` is `ns1.example.com`, which delegates the subdomain `a.example.com` to `ns1.a.example.com`.

If you want to resolve `host.a.example.com`, you first consult the authoritative server `ns1.example.com`, which leads you to consult `ns1.a.example.com`. The problem is that if it does not give you the IP of this server, a circular dependency is created since it must ask for the address of that server.

Therefore the server providing the delegation must also indicate one or more IP addresses for the server mentioned in the delegation, this is called *glue*.

## CACHES

1. Caches are very important, otherwise all queries would start on one root server, making the process inefficient.
2. They store records for a certain time in the Time to live of each record. Typical values ​​are on the order of 5 days.
3. They usually have the recursive algorithm
4. Negative cache is when the nonexistence of a certain domain name is cached.


## REVERSE DNS

- It is the domain name query for when the IP address is known.
    
- The TLD `arpa` is used. For IPv4 you use `in-addr.arpa`, for IPv6 you use `ip6.arpa`. The addresses are reversed.
    
- A DNS query is made using a domain name that actually contains the IP address, backwards and forwards.
    
- When making the query, the authoritative name servers are explored starting from `in-addr.arpa` downwards. Since blocks of IP addresses are assigned to organizations, each organization has a domain name server configured to do reverse DNS to its block. In the case in which the organization transfers a subnet to another organization, the corresponding block is delegated in parallel so that reverse DNS works.
    
- In the case of IPv4, each domain covers one octet, for example for `10.20.30.40` a query is made for `40.30.20.10.in-addr.arpa`.
    
- As originally the addresses were class A, B or C (`/8`, `/16` and `/24`). Assigning an octet to each domain made sense, but incorporating CIDR began assigning blocks of addresses that are not aligned in the octets. For example, there are two `/25`s in the same reverse domain name that encompasses a `/24`. Therefore, RFC 2317 established the little trick to use to delegate what would be something like half a domain name.
    
- In the case of IPv6 the domains correspond to 4 bits, for example for `2001:db8::567:89ab` a query is made for `b.a.9.8.7.6.5.0.0.0.0.0.0.0.0.0.0.0. 0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa`.

## TYPES OF DOMAINS


- Generic Top-Level Domains (gTLD)
	- __generic top-level domains__ are made up of 3 letters. They are domains such as __.COM__, __.NET__, __.ORG__ for commercial websites, which are the most common, but also include others such as __.INFO__ or __.BIZ__.
- Geographic top-level domains (ccTLD, country code Top-Level domain)
	- Geographic top-level domains or ccTLDs are those that refer to a country, such as __.ES__, __.PT__, __.FR__, etc.
- Third level domains
	- They are those that are formed by combining a generic domain and a country code domain:
		- Example: mydomain.com.es
	- Its purpose is to delimit the information of the generic top-level domain to the territory in which the brand is located.
- Second Level Domain (STLD)
	- It is the main, specific part of the domain that is located directly to the left of the TLD. For example, in `example.com`, `example` is the SLD.
	- SLDs are unique within a TLD, meaning that the same SLD can exist under different TLDs.

- Subdomains (Third level):
	- Subdomains are used to identify a device within a company:
		- hello.domain.com


## HTTPS (DoH) DNS over HTTPS

- DNS over HTTPS (DoH) is an extension that allows domain name resolution over HTTPS connections instead of traditional unencrypted DNS connections.

## DNSSEC - DOMAIN NAME SYSTEM SECURITY EXTENSIONS

- DNSSEC is an extension to the domain name system (DNS) that provides an additional layer of security by cryptographically signing DNS records.

	- Functioning:
		- DNS records are digitally signed by the zone's issuing entity, and DNS servers can verify the authenticity of the information before providing it to users.

## DOT - DNS over TLS

- DNS over TLS (DoT) is an extension of the DNS protocol that encrypts DNS queries using TLS (Transport Layer Security), the same security protocol used in HTTPS.

### TLS

- TLS, or Transport Layer Security, is a security protocol that provides privacy and security in communications over a network.
	- **Data Encryption:**
		- TLS encrypts data transmitted between two systems, ensuring that only the intended recipient can decrypt and understand the information.

	- **Authentication:**
		- Facilitates mutual authentication between client and server, ensuring that both parties are who they say they are. This is done through the exchange of digital certificates.

	- **Data Integrity:**
		- Ensures the integrity of the transmitted data, meaning that it has not been manipulated or altered during transmission.

	- **Protection against Attacks:**
		- Provides protection against various attacks, such as data interception (interception) and unauthorized modification of information.

	- **TLS versions:**
		- There are several versions of TLS, from TLS 1.0 to TLS 1.3. Using the latest versions is encouraged to take advantage of security and performance improvements.

	- **Default Port:**
		- The default port for TLS is 443. When used in combination with HTTP, it is called HTTPS (HTTP Secure).

	- **Common Uses:**
		- TLS is widely used in web applications to secure communication between browsers and servers. It is also used in other applications to ensure the security of sensitive data transmissions.
 
# COMMANDS TO CHECK CONFIGURATION

![image](https://github.com/josedaniel12345/Redes/assets/151370313/84a61c20-51fa-41bc-9ca3-482749fb8b5b)

![image](https://github.com/josedaniel12345/Redes/assets/151370313/df10f4c9-1ccd-4d93-8723-3629de448bd4)

![image](https://github.com/josedaniel12345/Redes/assets/151370313/762ab28a-61a5-4234-bf02-9786cc419ad0)

# BIND9 FILE CONFIGURATION

## NAMED.CONF.OPTIONS
![image](https://github.com/josedaniel12345/Redes/assets/151370313/58dd614d-4fad-413c-8bcf-c60d172d8f23)

## NAMED.CONF.LOCAL
![image](https://github.com/josedaniel12345/Redes/assets/151370313/93c2f605-2659-49f5-b1fd-0897663f2c41)

## DB.JOSEM7SMX.COM
![image](https://github.com/josedaniel12345/Redes/assets/151370313/4f2ba7cf-7986-4e3b-8434-66d04bcf62fe)

## DB.1.16.172

![image](https://github.com/josedaniel12345/Redes/assets/151370313/d4cd8755-38bd-4a35-b979-408489b6baf7)


# ZONE TRANSFER CHECK

![image](https://github.com/josedaniel12345/Redes/assets/151370313/794544da-4d55-47d9-b836-855076e17207)

![image](https://github.com/josedaniel12345/Redes/assets/151370313/cb462836-efd1-4bc6-a474-4041b1303f00)





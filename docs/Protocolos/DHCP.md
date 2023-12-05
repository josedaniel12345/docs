The DHCP protocol is based on the acronym DORA:

- DISCOVER
- OFFER
-REQUEST
- ACK

![image](https://github.com/josedaniel12345/Redes/assets/151370313/c8d2d1b8-9f80-473a-bb67-be8576eb48b3)


As you can see, the DHCP REQUEST, which some think is unicast, is a broadcast for the simple fact that the destination address is 255.255.255.255.


DORA:
- DHCP DISCOVER → BROADCAST
- DHCP OFFER → UNICAST
- DHCP REQUEST → BROADCAST
- DHCP ACK → UNICAST
- DHCP NACK → UNICAST

DHCP REQUESTS/PROCESS EXPLANATION
- DISCOVER:
  - DHCP Discover is the first step in the process of dynamically assigning IP addresses on a network. In this step, a device, such as a computer, sends a DHCP discovery message to the network in order to obtain an IP address. This message is transmitted over the network and is how a device searches for an available DHCP server to obtain network settings, including the assigned IP address, subnet mask, gateway, and other network parameters. necessary.
- OFFER:
  - In the process of dynamically assigning IP addresses on a network, after a device, such as a computer, sends a DHCP Discover message, available DHCP servers respond with a message called DHCP Offer. This message contains a network configuration offer, which includes an available IP address for the device, as well as other network parameters such as subnet mask, gateway, and DNS settings. The receiving device evaluates the offers and selects one to accept, marking the next step in the DHCP process.

### SUMMARY

In summary, the entire process involves "DHCP Discover" of the device, followed by "DHCP Offer" of the available servers, then "DHCP Request" of the device to request the desired configuration, and finally, "DHCP Acknowledgment" or "DHCP Negative Acknowledgment" from the server to confirm or reject the request.


![image](https://github.com/josedaniel12345/Redes/assets/151370313/b710fe08-e10a-471f-9c18-65f5659ac41e)

# ISC-DHCP-SERVER LINUX CONFIGURATION
__PATH:__ */etc/dhcp/dhcpd.conf*
![image](https://github.com/josedaniel12345/Redes/assets/151370313/a83abe4c-5429-4b79-be66-cde20dbedf45)

![image](https://github.com/josedaniel12345/Redes/assets/151370313/b50b0be1-296b-4c53-b99d-8915a9037ca5)

![image](https://github.com/josedaniel12345/Redes/assets/151370313/5f56530e-c785-4cb7-83e1-6da275e785ae)
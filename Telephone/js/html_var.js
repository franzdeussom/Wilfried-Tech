const phone = $('#phone');
const sizeAdjust = $('#phone-scale');

phone.screen = $('#screen');
phone.screen.off = $('.off-screen')


phone.volDown = $('.vol-down');
phone.volUp = $('.vol-up');
phone.power = $('.power');
registerForLongClickEvent(phone.power,1000);

phone.bottomNavBar = $('.phone-nav-button');
phone.bottomNavBar.recent = $('.nav-button:nth-child(1)');
phone.bottomNavBar.home = $('.nav-button:nth-child(2)');
phone.bottomNavBar.back = $('.nav-button:nth-child(3)');

phone.statusBar = $('.status-bar');
phone.statusBar.time = $('.status-bar-time');
phone.statusBar.mbps = $('.status-bar-mbps');
phone.statusBar.wifi = $('.status-bar-wifi');

phone.statusBar.batteryLevel = $('.status-bar-battery-level');
phone.statusBar.batteryValue = $('.status-bar-battery-value');
phone.statusBar.chargeIndicator = $('.status-bar-battery-charge-indicator');
phone.statusBar.data = $('.status-bar-data');
phone.statusBar.dataType = $('.status-bar-4g');

alert('Wilfriedroid V1.0 beta')
alert(`
    maintenez le bouton allumer pour allumer le téléphone
    bouton volume non operationel !
    redimensionner le téléphone avec le bouton bleu a gauche. glisser le vers le haut pour agrandir et vers le bas pour rétrécir !
`)

alert(`
    actuellement c'est pas tellement fun 
    mais vous pouvez voir la réaction du téléphone au éventuellement suivant
      vous charger votre téléphone
      vous activez ou désactivez la connexion 
      vous vous connectez a un wifi 
`)

if(confirm(`
Dans quelques mois :
  mise en place du menu principal
  mise place de la barre de statut
  mise en place des applications
  .  .  .
  
  pour voir la maquette de la version future cliquez sur 'ok'
  pour le demander a Mr Wilfried sur WhatsApp !
`)){
  window.open('whatsapp://send?phone=+237657933001&text=Bonsoir Mr.\n c\'est a propos de la maquette de votre project Wilfriedroid','_blank')
}
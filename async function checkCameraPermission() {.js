async function checkCameraPermission() {
    try {
        console.log('Verificando permissão da câmera...');
        const permissionStatus = await navigator.permissions.query({ name: 'camera' });
        console.log('Estado da permissão da câmera:', permissionStatus.state);

        if (permissionStatus.state === 'denied') {
            console.log('Permissão da câmera negada.');
            alert('O acesso à câmera foi negado. Por favor, permita o acesso nas configurações do navegador.');
            return false;
        }

        console.log('Permissão da câmera concedida.');
        return true;
    } catch (err) {
        console.error('Erro ao verificar permissões:', err);
        return true; // Tenta acessar mesmo se a API de permissões não for suportada
    }
}
function initPushwoosh()
{
    //get pushwoosh plugin
    var pushNotification = window.plugins.pushNotification;
    //notify plugin that device is ready, this is VERY important as it will dispatch on start push notification
    pushNotification.onDeviceReady();
 
    //register for push notifications
    pushNotification.registerDevice({ projectid: "234603336883", appid : "09270-402A1" },
        function(status) {
            //this is push token
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
 
    //this function gets called when push notifications has been received
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
            var userData = event.notification.userdata;
                                 
            if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
}
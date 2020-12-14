(function(){
    emailjs.init("user_qEge2f8pRu8IucU4BnAH0");
}) ();

const msg = new Vue({
    el: '#msg',
    data:{
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    },
    methods: {
        enviar() {
            event.preventDefault()
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                subject: this.subject,
                message: this.message
            };

            
            emailjs.send("service_h1pq6po", "template_e37a2zs", data).then(
                function(response) {
                    if(response.text === "OK"){
                        alert("El correo se ha enviado de forma exitosa")
                        location.reload()
                    }
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text)
                }, function(err) {
                    alert('Ocurrio un problema al enviar el correo');
                    console.log("FAILED. error=", err)
                    location.reload()
                }
            );
            
            /*
            emailjs.send("service_h1pq6po", "template_e37a2zs", {
                from_name: this.from_name,
                from_email: this.from_email,
                subject: this.subject,
                message: this.message
            })
            */
        }
    }
})
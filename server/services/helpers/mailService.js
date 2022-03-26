const nodemailer = require('nodemailer');

const {SMTP_USER, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT, API} = process.env


class MailService{
    static sendMail = async (to, link, firstname, lastname, presentation, plan ) => {
        let testAccount = await nodemailer.createTestAccount()

        let transporter = nodemailer.createTransport({
            service: "gmail", 
            auth: {
              user: `${SMTP_USER}`, // generated ethereal user
              pass: `${SMTP_PASSWORD}` // generated ethereal password
            }
          });

          await transporter.sendMail({
            from: 'ГОСУДАРСТВЕННОЕ АГЕНТСТВО ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ И ИННОВАЦИЙ ПРИ КАБИНЕТЕ МИНИСТРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ',
            to: to,
            subject: 'Заявка на регистрацию профиля',
            text: '',
            html:`
                <div style="display: flex; flex-direction: column;justify-content: center;align-items: center;width: 100%;height: 100%;">  
                        <div style="margin:20px;width: 500px;">
                            <h1>Новый пользователь <span>%NAME%</span> отправил заявку</h1>
                            <div>
                                <div style="display: flex;align-items: center;">
                                    <h4>Ссылка на презинтацию:</h4>
                                    <p>%PRESENTATION%</p>
                                </div>
                                <div style="display: flex;align-items: center;">
                                    <h4>Ссылка на бизнес план:</h4>
                                    <p>%PLAN%</p>
                                </div>
                                <div style="display: flex;align-items: center;"></div>
                            </div>          
                            <a href="${link}">Активировать профиль</a>
                        </div>
                </div>
            `
        }, (err)=>{
            if(err)
                console.log(err);
            else console.log('mail sent!');
        })
    }
}

module.exports = MailService;
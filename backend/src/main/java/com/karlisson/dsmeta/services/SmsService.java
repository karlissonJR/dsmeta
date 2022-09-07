package com.karlisson.dsmeta.services;

import com.karlisson.dsmeta.entities.Sale;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class SmsService {

    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    public void sendSms(Sale sale) {

        Twilio.init(twilioSid, twilioKey);

        PhoneNumber to = new PhoneNumber(twilioPhoneTo);
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate date = sale.getDate();
        String sellerName = sale.getSellerName();
        Double amount = sale.getAmount();

        String bodyMessage = String.format(
                "Dados da compra:\nData: %s\nVendedor: %s\nValor: R$ %.2f",
                date.format(formatter),
                sellerName,
                amount
        );

        Message message = Message.creator(to, from, bodyMessage).create();

        System.out.println(message.getSid());
    }
}
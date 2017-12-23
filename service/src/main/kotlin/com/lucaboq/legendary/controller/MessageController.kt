package com.lucaboq.legendary.controller

import com.lucaboq.legendary.model.Message
import org.slf4j.LoggerFactory
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller


@Controller
class MessageController {
    private val logger = LoggerFactory.getLogger(WebSocketEventListener::class.java)

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    fun sendMessage(@Payload chatMessage: Message): Message {
        logger.info("{}", chatMessage)
        return chatMessage
    }
}
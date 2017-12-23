package com.lucaboq.legendary.controller

import org.slf4j.LoggerFactory
import org.springframework.context.event.EventListener
import org.springframework.messaging.simp.SimpMessageSendingOperations
import org.springframework.stereotype.Component
import org.springframework.web.socket.messaging.SessionConnectedEvent
import org.springframework.web.socket.messaging.SessionDisconnectEvent


@Component
class WebSocketEventListener(
        val messagingTemplate: SimpMessageSendingOperations
) {

    private val logger = LoggerFactory.getLogger(WebSocketEventListener::class.java)


    @EventListener
    fun handleWebSocketConnectListener(event: SessionConnectedEvent) {
        logger.info("Connected: {}", event)
    }

    @EventListener
    fun handleWebSocketDisconnectListener(event: SessionDisconnectEvent) {
        logger.info("Disconnected")
//        val headerAccessor = StompHeaderAccessor.wrap(event.message)

//        val username = headerAccessor.sessionAttributes["username"] as String
//        if (username != null) {
//            logger.info("User Disconnected : " + username)
//        }
    }
}
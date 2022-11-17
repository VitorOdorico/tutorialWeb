#include <Ultrasonic.h> // Biblioteca do Sensor Ultrassônico

#define trigger 4
#define echo 5

Ultrasonic ultrasonic(trigger, echo); // inicializa o ultrasonic(4, 5)

#define IN1 6
#define IN2 7
#define IN3 8
#define IN4 9

void setup()

  {
    pinMode(IN1,OUTPUT); 
    pinMode(IN2,OUTPUT);
    pinMode(IN3,OUTPUT); 
    pinMode(IN4,OUTPUT);
    delay(1000);
  }

void loop()

  {
    robo_frente();
    float dist_cm = distancia();
    if(dist_cm<30)
  {

  decisao();
  delay(100);
  float distancia()

  {

    float cmMsec; long microsec = ultrasonic.timing(); cmMsec = ultrasonic.convert(microsec, Ultrasonic::CM); delay(10);
    return cmMsec;
  }

 void robo frente()
 
  {
    digitalWrite(IN1, HIGH); 
    digitalWrite(IN2,LOW); 
    digitalWrite(IN3, HIGH); 
    digitalWrite(IN4, LOW); 
  }
    void robo esquerda()
  {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2,LOW);
    digitalWrite(IN3,LOW);
    digitalWrite(IN4,HIGH);

  void robo parado()

  {
    digitalWrite(IN1,LOW);
    digitalWrite(IN2, LOW); 
    digitalWrite(IN4,LOW);
    digitalWrite(IN3,LOW);
  }

  void decisao()
  {
    robo parado()
    delay(500);
    robo_esquerda() 
    delay(400);
    robo_parado();
  }

  
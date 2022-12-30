class Ending {
    constructor(){
        this.end=false;
        this.store1="Patient 1225";
        this.store2="Examination #2: Results";
        this.store3="Patient 1225’s condition is much graver than expected. Patient 1225 refuses to stop attempting to save a fake character, despite the examiners communicating directly to Patient 1225 that the character is fake. Additionally, despite the character beginning to glitch and being nearly unrecognizable, Patient 1225 continued to attempt to save it, and eventually succeeded. ";
        this.store4="Future tests to come. ";
        this.show1="";
        this.show2="";
        this.show3="";
        this.show4="";
        this.store=[this.store1,this.store2,this.store3,this.store4];
        this.showw=[this.show1,this.show2,this.show3,this.show4];
        this.counter=[0,0,0,0];
        this.paragraph=0;
        this.done=false;
        this.done1;
        this.done2;
        this.done3;
        this.time=millis();
        this.time0;
        this.time1;
        this.time2;
    }

    display(){
        background(0);
        fill(255);
        textSize(20);
        noStroke();
        textAlign(LEFT,TOP);
        rectMode(CORNER);
        textFont(consolaFont);
        text(this.show1,100,100); 
        text(this.show2,100,140); 
        text(this.show3,100,220,800); 
        text(this.show4,100,390); 
        this.type(0); 
        if(millis()-this.time0>500){
            this.type(1); 
            if(millis()-this.time1>1000){
                this.type(2); 
                if(millis()-this.time2>5000){
                    this.type(3); 
                    if(millis()-this.time>5000){
                        this.end=false;
                        menu.menu=true;
                        typing.play();
                    }
                }
                
            }
            
        }
    }

    type(paragraph){
        if(millis()-this.time>30){
            if(this.counter[paragraph]==this.store[paragraph].length){
                if(paragraph==0 && !this.done1){
                    this.time0=millis();
                    this.done1=true;
                }
                if(paragraph==1 && !this.done2){
                    this.time1=millis();
                    this.done2=true;
                }
                if(paragraph==2 && !this.done3){
                    this.time2=millis();
                    this.done3=true;
                }
                
                if(paragraph==3 && !this.done){
                    this.time=millis();
                    this.done=true;
                    
                }
                return -1;
            }
            if(paragraph==0){
                this.show1+=this.store[paragraph][this.counter[paragraph]];
            }else if(paragraph==1){
                this.show2+=this.store[paragraph][this.counter[paragraph]];
            }else if(paragraph==2){
                this.show3+=this.store[paragraph][this.counter[paragraph]];
            }else if(paragraph==3){
                this.show4+=this.store[paragraph][this.counter[paragraph]];
            }
            typing.stop();
            typing.setVolume(0.01);
            typing.rate(random(0.8,1));
            //typing.play();
            console.log("type");
            this.counter[paragraph]++;            
            this.time=millis();
        }
    } 
}
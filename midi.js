const Max = require("max-api");

const setMidi = (d,mc,os) => {
    m="max";
    mi="midi";
    pe="portenable";
    pa="portabbrev";
    po="portoffset";
    inn="innum";
    out="outnum";
    var mc;
    var os;
    var dir= `${d}`;
    s1=[m,mi,pe,dir,1,0];
    s2=[m,mi,pe,dir,1,1];
    s3=[m,mi,pa,inn,dir,mc];
    s4=[m,mi,pa,out,dir,mc];
    s5=[m,mi,po,inn,dir,os];
    s6=[m,mi,po,out,dir,os];
    com=[s1,s2,s3,s4,s5,s6];
    for (const x of (com)) {
        Max.outlet(x);
        console.log(x);
    };

};

Max.addHandler('input', (dir) => {
    Max.outlet(["\; max clearmaxwindow"]);
    if (dir === '2600') {
        mc = 2;
        os = 16;
        d=dir;
        setMidi(d,mc,os);
    } else if (dir === 'MODEL D') {
        mc = 3;
        os = 32;
        d=dir;
        setMidi(d,mc,os);    
    } else if (dir === 'RD-8') {
        mc = 4;
        os = 48;
        d=dir;
        setMidi(d,mc,os);
    } else if (dir === 'KOMPLETE KONTROL S49 MK2 Port 1') {
        mc = 5;
        os = 64;
        d=dir;
        setMidi(d,mc,os);            
    } else if (dir === 'KOMPLETE KONTROL S49 MK2 Port 2') {
        mc = 6;
        os = 80;
        d=dir;
        setMidi(d,mc,os);
    } else if (dir === 'Ableton Push 2 Live Port') {
        mc = 7;
        os = 96;
        d=dir;
        setMidi(d,mc,os);
    } else if (dir === 'Ableton Push 2 User Port') {
        mc = 8;
        os = 112;
        d=dir;
        setMidi(d,mc,os);
    }/*  else if (dir) {
        mc = 0;
        os = 304;
        d=dir;
        setMidi(d,mc,os);
    }   
    else  { 
        mc =0;
        os = 304;
        d = dir;
        setMidi(d,mc,os);
      }*/

    
});

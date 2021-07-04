const Max = require("max-api");
//Max.post('test123');
m="max";
mi="midi";
po="portenable";
pa="portabbrev";
pos="portoffset";
inn="innum";
out="outnum";

n1=1;
n2=0;

Max.addHandler('input', (dir) => {
    Max.post(`Received ${dir}`);
    if (dir === '2600') {
        d=dir.toString();
        s1=[m,mi,po,d,n1,n2];
        s2=[m,mi,po,d,n1,n1];
        s3=[m,mi,pa,inn,d,3];
        s4=[m,mi,pa,out,d,3];
        s5=[m,mi,pos,inn,d,16];
        s6=[m,mi,pos,out,d,16];
        Max.outlet(s1);
        Max.outlet(s2);
        Max.outlet(s3);
        Max.outlet(s4);
        Max.outlet(s5);
        Max.outlet(s6);
        
    } else if (dir === 'X-USB') {
        Max.post('X-USB');
    } else if (dir === 'from Max 2') {
            Max.post('asefasefasdf');
    } else if (dir === 'AU DLS Synth 1') {
        Max.post('AU DLS Synth 1');
    } else if (dir === 'E-MU XMidi1x1 Nidi Out ') {
        Max.post('E-mu out');
    } 
    //Max.post('got shit');
    //Max.outlet(`${dir}`);
    //        Max.outlet(["\; max clearmaxwindow"]);
});

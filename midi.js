const Max = require("max-api");
//Max.post('test123');
m="max";
mi="midi";
pe="portenable";
pa="portabbrev";
po="portoffset";
inn="innum";
out="outnum";


//TODO make function

Max.addHandler('input', (dir) => {
    Max.post(`Received ${dir}`);
    if (dir === '2600') {
        arp=dir.toString();
        s1=[m,mi,pe,arp,1,0];
        s2=[m,mi,pe,arp,1,1];
        s3=[m,mi,pa,inn,arp,2];
        s4=[m,mi,pa,out,arp,2];
        s5=[m,mi,po,inn,arp,16];
        s6=[m,mi,po,out,arp,16];
        com=[s1,s2,s3,s4,s5,s6];
        for (const x of (com)) { 
            Max.outlet(x);
        };
        
    } else if (dir === 'MODEL D') {
        Max.post(dir);
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

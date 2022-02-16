interface CallBook
{
    (
    fname: string,
    mobile: number,
    region: string,
    code?: string
    
    ): void
};

function logBook(fname: string, mobile: number, region: string, code: string): void
{
    console.log("\nUser Details \nName: "+fname+"\nMobile No.: "+mobile+"\nPostal Code: "+code+"\nRegion: "+region);
}

let CallObj: CallBook = logBook;
CallObj('Ameya',9987658911,'India','+91');

let CallObj2: CallBook = logBook;
CallObj2('Abcdef',8172574191,'India');
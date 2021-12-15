const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUxMDExOCwiZXhwIjoxOTU1MDg2MTE4fQ.n_1ON3spG8iTfcVhhr5SVF_YVwK9zTLL2ChEvI1BSmY`;

const SUPABASE_URL = `https://fyyidslbegjzyojgpivl.supabase.co`;

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getMX(){
    const response = await client
        .from(`KTM_Motorcycles`)
        .select();

    return checkError(response);
}

export async function getKLK(){
    const response = await client
        .from(`kill_la_kill`)
        .select();
        
    return checkError(response);
}

export async function getTea(){
    const response = await client 
        .from(`tea`)
        .select();

    return checkError(response);
}

function checkError({ data, error }){
    return error ? console.log(error) : data;
}


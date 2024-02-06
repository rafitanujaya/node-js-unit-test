export class MyExceotion extends Error {

}

export function callMe (name) {
    if (name == 'rafi') {
        throw new MyExceotion('ups my exception happens')
    } else {
        return "OK";
    }
}
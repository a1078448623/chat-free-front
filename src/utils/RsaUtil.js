import JSEncrypt from 'jsencrypt/bin/jsencrypt';
export function RSAEnc(pk,data){
    let encryptor = new JSEncrypt() // 新建JSEncrypt对象
    encryptor.setPublicKey(pk) // 设置公钥
    // 对需要加密的数据进行加密
    return encryptor.encrypt(data)
}
export function RSADec(sk,data){
    let decrypt = new JSEncrypt();
    // 设置私钥
    decrypt.setPrivateKey(sk);
    return decrypt.decrypt(data);
}
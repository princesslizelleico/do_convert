function convert_to_ip_mask(slash){
    var zeroes=32-slash;
    var bitmask="1".repeat(slash)+"0".repeat(zeroes);

    ip_mask=[]
    ip_mask.push(bitmask.substring(0,8));
    ip_mask.push(bitmask.substring(8,16));
    ip_mask.push(bitmask.substring(16,24));
    ip_mask.push(bitmask.substring(24,32));

    return parseInt(ip_mask[0],2) + "." + parseInt(ip_mask[1],2) + "." + parseInt(ip_mask[2],2) + "." + parseInt(ip_mask[3],2);
}

function do_convert(){
    var slash=document.getElementById("SLASH");
    var s_val=parseInt(slash.value);
    var ip=convert_to_ip_mask(s_val);
    var ip_mask=document.getElementById("IP_MASK");
    ip_mask.value=ip;
}
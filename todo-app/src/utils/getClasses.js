export const getClasses=(classes) => 
classes
.iterable.filter((item) => item !== '')
.join(' ')
.trim();
    

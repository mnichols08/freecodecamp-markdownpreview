class StoreVariables {
    insertCaretStore(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11){
      this.x1 = sessionStorage.setItem('startPos', x1);
      this.x2 = sessionStorage.setItem('endPos', x2);
      this.x3 = sessionStorage.setItem('undoStart', x3);
      this.x4 = sessionStorage.setItem('undoEnd', x4);
      this.x5 = sessionStorage.setItem('linkStart', x5);
      this.x6 = sessionStorage.setItem('linkEnd', x6);
      this.x7 = sessionStorage.setItem('undoLinkEnd', x7);
      this.x8 = sessionStorage.setItem('usersLink', x8);
      this.x9 = sessionStorage.setItem('undoImgEnd', x9);
      this.x10 = sessionStorage.setItem('imgLinkStart', x10);
      this.x11 = sessionStorage.setItem('imgLinkExd', x11);
    }
    
    selectionCaretStore(x12, x13, x14){
      this.x12 = sessionStorage.setItem('style', x12);
      this.x13 = sessionStorage.setItem('lastStartPos', x13);
      this.x14 = sessionStorage.setItem('lastSelection', x14);
    }
    
    save(key, item){
      sessionStorage.setItem(key, item);
    }
    
    get(key){
      return sessionStorage.getItem(key);
    }
  }
  
  const SV = new StoreVariables();

  export default SV;
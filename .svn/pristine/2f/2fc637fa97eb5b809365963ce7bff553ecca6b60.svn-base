
declare var $;

export class HtmlUtil {

      public checkBox(conditionValue?: string | any, baseKey?: string, key?: string): any {
            if (conditionValue) {
                  return (val) => {
                        this.boolToCheckBox(val[baseKey][key] === conditionValue);
                  };
            } else {
                  return this.boolToCheckBox;
            }
      }



      public boolToCheckBox(val: boolean, disabled: '' | 'disabled' = '') {
            if (val) {
                  return `<input type="checkbox" name="check" checked ${disabled}>`;
            } else {
                  return `<input type="checkbox" name="check"   ${disabled} >`;
            }
      }

      public radio(conditionValue, baseKey, key, ...values): any {
            return (val) => {
                  if (val[baseKey][key] === conditionValue) {
                        return '<input type="radio" checked="true" name="' + val[baseKey][key] + '-role" value="' + values[1] + '" >';
                  } else {
                        return '<input type="radio" name="' + val[baseKey][key] + '-role" value="' + values[0] + '">';
                  }
            };
      }


      fadeIn(id: string, durationInMilliseconds: number |
            string | 'slow' | 'fast' = 'slow') {
            $('#' + id).fadeIn(durationInMilliseconds);
      }


      fadeOut(id: string, durationInMilliseconds: number |
            string | 'slow' | 'fast' = 'slow') {
            $('#' + id).fadeOut(durationInMilliseconds);
      }


      showMsgForDuration(id: string, time: number = 2000) {
            this.fadeIn(id);
            setTimeout(() => {
                  this.fadeOut(id);
            }, time);
      }

      anchorTag(value: any) {
            return '<a href="javascript:;">' + value.value + '</a>';
      }
}

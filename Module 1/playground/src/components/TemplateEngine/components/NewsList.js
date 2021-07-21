export default {
    render() {
      return `
        <div class="newslist">
            <div class="news-item" for="item in newslist" style="border: 1px dotted #ccc;padding: 18px;margin: 10px 20px;">
                <div class="img"><img src="{{item.image}}" style="width: 300px;"/></div>
                <div class="title">{{item.title}}</div>
            </div>
        </div>
      `;
    },
  };
  
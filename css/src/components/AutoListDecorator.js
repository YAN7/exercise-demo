/**
 * 自动请求列表数据的通用方法
 */

export default function AutoListDecorator(target) {
	const { componentWillMount, componentDidMount, componentWillReceiveProps, componentWillUnmount, query } = target.prototype;
	target.prototype.view = window.document;
	target.prototype.componentWillMount = function () {
        // 覆盖再先执行原来的componentWillMount
        if (componentWillMount) componentWillMount.call(this);
        // 绑定this
		this.query = this.query.bind(this);
		this.scroll = this.scroll.bind(this);
        // 通用逻辑
		const { dispatch } = this.props;
		dispatch({ type: `${this.model}/set`, payload: {loading: false, data: [], currentPage: 0} });
	};
	target.prototype.componentDidMount = function () {
        // 覆盖再先执行原来的componentDidMount
        if (componentDidMount) componentDidMount.call(this);
        // 通用逻辑
		this.view.addEventListener('scroll', this.scroll);
		this.query();
    };
    target.prototype.componentWillReceiveProps = function (nextProps) {
        // 覆盖再先执行原来的componentWillReceiveProps
        if (componentWillReceiveProps) componentWillReceiveProps.call(this, nextProps);
        // 通用逻辑
		this.loading = nextProps.loading;
    };
	target.prototype.componentWillUnmount = function() {
		// 覆盖再先执行原来的componentWillMount
		if (componentWillUnmount) componentWillUnmount.call(this);
		// 通用逻辑s
		this.view.removeEventListener('scroll', this.scroll);
    }

    // 通用方法
    target.prototype.query = function () {
		if (query) return;
		// 请求数据
		const { dispatch } = this.props;
		dispatch({ type: `${this.model}/queryNextList` });
	};
	target.prototype.scroll = function() {
		// 监听滚动事件
		let { scrollTop, clientHeight, scrollHeight } = this.view;
		if (this.view === window.document) {
			scrollTop = window.document.body.scrollTop; // 滚动条位置
			clientHeight = window.innerHeight;// 父元素可见高度
			scrollHeight = window.document.body.scrollHeight;// 父元素实际高度
		}
		if (!this.loading && scrollTop + clientHeight > scrollHeight - 100) {
			this.loading = true;
			this.query();
		}
    }
}

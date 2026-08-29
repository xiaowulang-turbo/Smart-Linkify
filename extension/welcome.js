// 欢迎页面脚本
;(function () {
	'use strict'

	function applyTheme(theme) {
		if (theme === 'light' || theme === 'dark') {
			document.documentElement.setAttribute('data-theme', theme)
		} else {
			document.documentElement.removeAttribute('data-theme')
		}
	}

	function initializeTheme() {
		applyTheme('auto')

		if (
			typeof chrome === 'undefined' ||
			!chrome.storage ||
			!chrome.storage.sync
		) {
			return
		}

		chrome.storage.sync.get(['config'], function (result) {
			const config = (result && result.config) || {}
			applyTheme(config.theme || 'auto')
		})
	}

	// 初始化主题（立即执行，避免闪烁）
	initializeTheme()

	// 绑定按钮事件
	document.addEventListener('DOMContentLoaded', function () {
		// 初始化国际化
		if (typeof i18n !== 'undefined') {
			i18n.init()
		}

		const startBtn = document.getElementById('startBtn')
		const settingsBtn = document.getElementById('settingsBtn')

		if (startBtn) {
			startBtn.addEventListener('click', function () {
				window.close()
			})
		}

		if (settingsBtn) {
			settingsBtn.addEventListener('click', function () {
				chrome.runtime.openOptionsPage()
			})
		}
	})
})()

package com.androidbarstyler

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.ReadableMap

@ReactModule(name = AndroidBarStylerModule.NAME)
class AndroidBarStylerModule(reactContext: ReactApplicationContext) :
  NativeAndroidBarStylerSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun setStatusBarColor(color: String, isAnimated: Boolean?, duration: Double?) {
    setBarColorWithOptions(BarType.STATUS, color, isAnimated, duration)
  }

  override fun setNavigationBarColor(color: String, isAnimated: Boolean?, duration: Double?) {
    setBarColorWithOptions(BarType.NAVIGATION, color, isAnimated, duration)
  }

  override fun setStatusBarStyle(options: ReadableMap) {
    setBarColor(BarType.STATUS, options)
  }

  override fun setNavigationBarStyle(options: ReadableMap) {
    setBarColor(BarType.NAVIGATION, options)
  }

  override fun setSystemBarsStyle(options: ReadableMap) {
    setBarColor(BarType.BOTH, options)
  }

  private fun setBarColorWithOptions(
    barType: BarType,
    color: String,
    isAnimated: Boolean?,
    duration: Double?
  ) {
    if (color.isEmpty()) return

    val options = BarStyleOptionsParser.createOptionsMap(color, isAnimated, duration)
    setBarColor(barType, options)
  }

  private fun setBarColor(barType: BarType, options: ReadableMap) {
    currentActivity?.let { activity ->
      BarStyleManager.updateBarColor(activity, barType, options)
    }
  }

  companion object {
    const val NAME = "AndroidBarStyler"
  }
}

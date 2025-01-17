package com.androidbarstyler

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap

class BarStyleOptionsParser {
  companion object {
    private const val DEFAULT_COLOR = "#000000"
    private const val DEFAULT_ANIMATION_DURATION = 300
    private const val DEFAULT_IS_ANIMATED = true

    fun parse(options: ReadableMap): BarStyleOptions {
      return BarStyleOptions(
        color = options.getString("color").orEmpty().ifEmpty { DEFAULT_COLOR },
        isAnimated = options.getBooleanOrNull("isAnimated") ?: DEFAULT_IS_ANIMATED,
        duration = options.getIntOrNull("duration") ?: DEFAULT_ANIMATION_DURATION
      )
    }

    fun createOptionsMap(color: String, isAnimated: Boolean?, duration: Double?): ReadableMap {
      return Arguments.createMap().apply {
        putString("color", color)
        isAnimated?.let { putBoolean("isAnimated", isAnimated) }
        duration?.let { putDouble("duration", it) }
      }
    }

    private fun ReadableMap.getBooleanOrNull(key: String): Boolean? =
      if (hasKey(key)) getBoolean(key) else null

    private fun ReadableMap.getIntOrNull(key: String): Int? =
      if (hasKey(key)) getInt(key) else null
  }
}

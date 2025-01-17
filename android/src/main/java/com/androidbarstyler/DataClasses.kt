package com.androidbarstyler

import android.view.Window

enum class BarType {
  STATUS,
  NAVIGATION,
  BOTH
}

data class BarStyleOptions(
  val color: String,
  val isAnimated: Boolean,
  val duration: Int
)

data class BarColorAnimationOptions(
  val window: Window,
  val barType: BarType,
  val fromColor: Int,
  val toColor: Int,
  val duration: Int
)

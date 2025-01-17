import android.animation.ValueAnimator
import android.view.View
import android.view.Window
import androidx.core.graphics.ColorUtils.calculateLuminance
import com.androidbarstyler.BarColorAnimationOptions
import com.androidbarstyler.BarType
import android.view.animation.LinearInterpolator
import android.app.Activity
import android.graphics.Color
import com.androidbarstyler.BarStyleOptionsParser
import com.facebook.react.bridge.ReadableMap

class BarStyleManager {
  companion object {
    private const val LUMINANCE_THRESHOLD = 0.5
    private var currentAnimation: ValueAnimator? = null

    fun updateBarColor(activity: Activity, barType: BarType, optionsMap: ReadableMap) {
      val options = BarStyleOptionsParser.parse(optionsMap)
      val color = parseColor(options.color) ?: return
      val window = activity.window
      val duration = options.duration

      activity.runOnUiThread {
        updateBarContentColor(window, barType, color)
        val fromColor = getCurrentColor(window, barType)

        if (!options.isAnimated) {
          setBarColor(window, barType, color)
          return@runOnUiThread
        }

        animateBarColor(BarColorAnimationOptions(
          window,
          barType,
          fromColor,
          color,
          duration
        ))
      }
    }

    private val barTypeToFlag = mapOf(
      BarType.STATUS to View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR,
      BarType.NAVIGATION to View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR,
      BarType.BOTH to (View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR or View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR)
    )

    private fun animateBarColor(params: BarColorAnimationOptions) {
      currentAnimation?.cancel()

      currentAnimation = ValueAnimator.ofArgb(params.fromColor, params.toColor).apply {
        duration = params.duration.toLong()
        interpolator = LinearInterpolator()
        addUpdateListener { animator ->
          setBarColor(params.window, params.barType, animator.animatedValue as Int)
        }
        start()
      }
    }

    private fun updateBarContentColor(window: Window, barType: BarType, backgroundColor: Int) {
      val isDarkBackground = calculateLuminance(backgroundColor) < LUMINANCE_THRESHOLD
      val flag = barTypeToFlag[barType] ?: return

      window.decorView.apply {
        systemUiVisibility = if (isDarkBackground) {
          systemUiVisibility and flag.inv()
        } else {
          systemUiVisibility or flag
        }
      }
    }

    private fun setBarColor(window: Window, barType: BarType, color: Int) {
      with(window) {
        when (barType) {
          BarType.STATUS -> statusBarColor = color
          BarType.NAVIGATION -> navigationBarColor = color
          BarType.BOTH -> {
            statusBarColor = color
            navigationBarColor = color
          }
        }
      }
    }

    private fun getCurrentColor(window: Window, barType: BarType): Int {
      return when (barType) {
        BarType.STATUS -> window.statusBarColor
        BarType.NAVIGATION -> window.navigationBarColor
        BarType.BOTH -> window.statusBarColor
      }
    }

    private fun parseColor(colorString: String): Int? {
      return try {
        Color.parseColor(colorString)
      } catch (e: IllegalArgumentException) {
        null
      }
    }
  }
}

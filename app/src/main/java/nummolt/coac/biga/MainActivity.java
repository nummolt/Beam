package nummolt.coac.biga;

import android.content.Intent;
import android.graphics.Color;
import android.graphics.Point;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {
    private WebView m_browser;
    Point getDisplaySize() {
        final Point point = new Point();
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);

        point.y=metrics.heightPixels;
        point.x=metrics.widthPixels;
        Log.i("MIDA","mida: "+Integer.toString(point.y));
        return point;
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        toolbar.setLogo(R.mipmap.ic_launcher);
        m_browser = (WebView) findViewById(R.id.webkit);
        m_browser.getSettings().setJavaScriptEnabled(true);
        m_browser.getSettings().setBuiltInZoomControls(true);
        m_browser.getSettings().setSupportZoom(true);
        m_browser.getSettings().setLoadWithOverviewMode(true);
        m_browser.getSettings().setUseWideViewPort(true);
        Point pt=getDisplaySize();
        int height=pt.y;
        m_browser.setInitialScale((int)Math.floor(100.0f*height/480.0f));
        m_browser.setBackgroundColor(Color.parseColor("#F9AA35"));
        m_browser.loadUrl("file:///android_asset/index.html");
/*
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
*/
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            String nummolt="nummolt";
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://search?q=" + nummolt +"&c=apps")));
            } catch (android.content.ActivityNotFoundException anfe) {
                startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("https://play.google.com/store/search?q="+ nummolt+"&c=apps")));
            }
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}

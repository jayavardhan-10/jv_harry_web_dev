import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Main. */
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        int m=sc.nextInt();
        int a[][]=new int[n][m];
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                a[i][j]=sc.nextInt();
            }
        }
        int f=0;
        
        for(int i=1;i<n-1;i++)
        {
            for(int j=1;j<m-1;j++)
            {
                if(a[i][j]==1)
                {
                    if(a[i-1][j-1]==0 && a[i-1][j]==0 && a[i-1][j+1]==0
                    &&
                    a[i][j-1]==0 && a[i][j+1]==0
                    &&
                    a[i+1][j-1]==0 && a[i+1][j]==0 && a[i+1][j+1]==0)
                    {
                        System.out.println("Yes");
                        f=1;
                    break;
                    }
                    
                }
                
            }
            if(f==1)
            break;
        }
        if(f==0)
        System.out.println("No");

    }
}
let result = 1 + 2; // 3
            document.writeln("<p> 1+2 = " + result + "</p>");
            let originalResult = result; //3
            
            result -= 1; //2  //result = result - 2; sama seperti result -= 2;
            document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
            originalResult = result; //2

            result *= 2; //4  //result = result * 2; sama seperti result *= 2;
            document.writeln("<p>" + originalResult + " * 2 =" + result + "</p>");